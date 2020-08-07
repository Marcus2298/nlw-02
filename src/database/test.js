const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {

    proffyValue = {
        name: "João Paulo Teixeira",
        avatar: "https://avatars3.githubusercontent.com/u/51099440?s=460&u=0e98bba284a017a15e9cb55bf97bdc21e57e8ebe&v=4",
        whatsapp: "8999999999",
        bio: "Bão ou não Ze? Minha aula dura 4 horas em homenagem ao meu grande amigo Lainston",
    }

    classValue = {
        subject: 1,
        cost: "2500",

    }

    classScheduleValues = [
        {
            weekday: 0,
            time_from: 600,
            time_to: 15000
        },
        {
            weekday: 1,
            time_from: 760,
            time_to: 15060
        }
    ]

   // await createProffy(db, {proffyValue, classValue, classScheduleValues})

   const selectedProffys = await db.all("SELECT * FROM Proffys")
   // console.log(selectedProffys)


   const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
   `)
   //console.log(selectedClassesAndProffys)

   const selectedClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday= "0"
        AND class_schedule.time_from <= "740"
        AND class_schedule.time_to <= "740"
    `)
   //console.log(selectedClassesSchedules)
})