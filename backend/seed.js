// Adds demo data through the running API (start the backend first, then: npm run seed)
require('dotenv').config()

const API = process.env.SEED_API_URL || `http://localhost:${process.env.PORT || 3000}`

async function post(path, body) {
    const res = await fetch(API + path, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })
    const text = await res.text()
    if (!res.ok) throw new Error(`POST ${path} failed: ${text}`)
    return text
}

async function get(path) {
    const res = await fetch(API + path)
    return res.json()
}

const daysFromNow = (n) => {
    const d = new Date()
    d.setDate(d.getDate() + n)
    return d.toISOString().slice(0, 10)
}

const departments = [
    { name: 'Cardiology', description: 'Heart and blood vessel care' },
    { name: 'Neurology', description: 'Brain and nervous system care' },
    { name: 'Pediatrics', description: 'Care for infants and children' },
    { name: 'Orthopedics', description: 'Bones, joints and muscles' },
    { name: 'Gynecology', description: 'Women health and maternity' },
    { name: 'Emergency', description: '24/7 emergency and trauma care' }
]

const staff = [
    ['Dr. Ahmed Khan', 'ahmed.khan@hospital.com', 'doctor', 'Cardiology'],
    ['Dr. Sara Malik', 'sara.malik@hospital.com', 'doctor', 'Pediatrics'],
    ['Dr. Usman Ali', 'usman.ali@hospital.com', 'doctor', 'Orthopedics'],
    ['Ayesha Noor', 'ayesha.noor@hospital.com', 'nurse', 'Emergency'],
    ['Fatima Zahra', 'fatima.zahra@hospital.com', 'nurse', 'Gynecology'],
    ['Bilal Hussain', 'bilal.hussain@hospital.com', 'receptionist', 'Reception'],
    ['Hina Shah', 'hina.shah@hospital.com', 'pharmacist', 'Pharmacy'],
    ['Kamran Iqbal', 'kamran.iqbal@hospital.com', 'labouratorist', 'Laboratory'],
    ['Zainab Raza', 'zainab.raza@hospital.com', 'accountant', 'Accounts']
]

const patients = [
    ['Ali Raza', 'Male', '1985-04-12', 'O+'],
    ['Maryam Javed', 'Female', '1992-09-23', 'A+'],
    ['Hassan Mehmood', 'Male', '1978-01-05', 'B+'],
    ['Sana Tariq', 'Female', '2001-06-30', 'AB+'],
    ['Imran Siddiqui', 'Male', '1965-11-17', 'O-'],
    ['Nadia Aslam', 'Female', '1990-03-08', 'A-'],
    ['Omar Farooq', 'Male', '2015-08-14', 'B-'],
    ['Rabia Anwar', 'Female', '1988-12-01', 'AB-']
]

async function seed() {
    const existing = await get('/patient')
    if (existing.length > 0) {
        console.log(`Database already has ${existing.length} patients, skipping seed.`)
        return
    }

    for (const d of departments) await post('/department', d)

    for (const [name, email, role, department] of staff) {
        await post('/staff', { name, email, role, department, address: 'Lahore, Pakistan', phone: '03001234567', password: 'password' })
    }

    for (const [name, sex, dob, bloodgroup] of patients) {
        const email = name.toLowerCase().replace(' ', '.') + '@mail.com'
        await post('/patient', { name, email, address: 'Lahore, Pakistan', phone: '03111234567', sex, dob, bloodgroup, tor: daysFromNow(-10) + 'T09:30' })
    }

    const p = await get('/patient')
    const doctors = await get('/staff?role=doctor')
    const doc = (i) => doctors[i % doctors.length]._id

    for (let i = 0; i < 6; i++) {
        await post('/appointment', { doctorid: doc(i), patientid: p[i]._id, date: daysFromNow(i - 2) })
    }

    const meds = [
        ['Chest pain on exertion', 'Stable angina', 'Aspirin 75mg once daily, Atorvastatin 20mg at night', '1500'],
        ['Fever for 3 days', 'Viral fever', 'Paracetamol 500mg three times daily', '300'],
        ['Knee pain after fall', 'Ligament sprain', 'Ibuprofen 400mg twice daily, rest and ice', '600'],
        ['Persistent cough', 'Upper respiratory infection', 'Amoxicillin 500mg three times daily for 5 days', '800']
    ]
    for (let i = 0; i < meds.length; i++) {
        const [casehistory, description, medication, drugamount] = meds[i]
        await post('/prescription', { doctorid: doc(i), patientid: p[i]._id, casehistory, description, medication, date: daysFromNow(-i), drugamount })
    }

    for (const type of ['General Ward', 'Private Room', 'ICU', 'Maternity']) await post('/bed', { type })

    await post('/bedallotment', { patientid: p[0]._id, patientstatus: 'Admitted', bedtype: 'ICU', bednumber: 'ICU-02', allotmentdate: daysFromNow(-3), dischargedate: daysFromNow(4), staffname: 'Ayesha Noor' })
    await post('/bedallotment', { patientid: p[4]._id, patientstatus: 'Admitted', bedtype: 'General Ward', bednumber: 'GW-11', allotmentdate: daysFromNow(-1), dischargedate: daysFromNow(2), staffname: 'Fatima Zahra' })
    await post('/bedallotment', { patientid: p[5]._id, patientstatus: 'Discharged', bedtype: 'Maternity', bednumber: 'MT-04', allotmentdate: daysFromNow(-8), dischargedate: daysFromNow(-2), staffname: 'Fatima Zahra' })

    const donors = [
        ['Waqas Ahmed', 'Male', '28', 'O+', 2], ['Saima Bibi', 'Female', '34', 'A+', 1],
        ['Junaid Akhtar', 'Male', '41', 'B+', 3], ['Mehwish Ali', 'Female', '25', 'AB+', 1],
        ['Tariq Nawaz', 'Male', '37', 'O-', 2], ['Asad Ullah', 'Male', '30', 'A-', 1]
    ]
    for (const [name, gender, age, bloodgroup, bags] of donors) {
        await post('/blooddonor', { name, email: name.toLowerCase().replace(' ', '.') + '@mail.com', address: 'Lahore, Pakistan', phone: '03221234567', gender, age, bloodgroup, bags, lastdonationdate: daysFromNow(-20), staffname: 'Kamran Iqbal' })
    }

    await post('/dischargeblood', { patientid: p[0]._id, bloodgroup: 'O+', bags: 1, charges: '2500', date: daysFromNow(-2), staffname: 'Kamran Iqbal' })
    await post('/dischargeblood', { patientid: p[4]._id, bloodgroup: 'O-', bags: 1, charges: '2500', date: daysFromNow(-1), staffname: 'Kamran Iqbal' })

    await post('/report', { type: 'operation', staffname: 'Dr. Usman Ali', patientid: p[2]._id, description: 'Arthroscopic knee surgery', date: daysFromNow(-5) })
    await post('/report', { type: 'operation', staffname: 'Dr. Ahmed Khan', patientid: p[0]._id, description: 'Coronary angioplasty', date: daysFromNow(-3) })
    await post('/report', { type: 'birth', staffname: 'Dr. Sara Malik', patientid: p[5]._id, description: 'Healthy baby girl, 3.2 kg', date: daysFromNow(-6) })
    await post('/report', { type: 'death', staffname: 'Dr. Ahmed Khan', patientid: p[4]._id, description: 'Cardiac arrest', date: daysFromNow(-1) })

    for (let i = 0; i < 4; i++) {
        await post('/vital_signs', { patientid: p[i]._id, bloodpressure: ['120/80', '135/90', '110/70', '125/85'][i], temperature: ['98.6', '101.2', '98.4', '99.1'][i], pulse: ['72', '88', '76', '80'][i], spo: ['98', '95', '99', '97'][i], weight: ['78', '62', '85', '55'][i], Respirationrate: ['16', '20', '15', '18'][i], height: ['175', '160', '180', '158'][i] })
    }

    for (const i of [1, 3, 6]) await post('/queue', { name: p[i].name })

    const payments = [
        [0, '15000', 'Cash', 'ICU charges'], [1, '2000', 'Card', 'Consultation fee'],
        [2, '45000', 'Bank Transfer', 'Knee surgery'], [5, '30000', 'Cash', 'Maternity package']
    ]
    for (const [i, amount, modeofpayment, purpose] of payments) {
        await post('/payments', { patientid: p[i]._id, date: daysFromNow(-i), amount, modeofpayment, purpose })
    }

    console.log('Demo data added.')
}

seed().catch((err) => {
    console.error(err.message)
    process.exit(1)
})
