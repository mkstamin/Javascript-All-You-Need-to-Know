let students = [

    s1 = {
        Bangla: 70,
        English: 82,
        Mathematics: 77,
        Physics: 75,
        Chemistry: 68,
        Biology: 76,
    },
    s2 = {
        Bangla: 72,
        English: 62,
        Mathematics: 78,
        Physics: 65,
        Chemistry: 62,
        Biology: 67,
    },
    s3 = {
        Bangla: 65,
        English: 78,
        Mathematics: 88,
        Physics: 89,
        Chemistry: 82,
        Biology: 84,
    },
    s4 = {
        Bangla: 80,
        English: 92,
        Mathematics: 70,
        Physics: 82,
        Chemistry: 60,
        Biology: 89,
    },

    s5 = {
        Bangla: 85,
        English: 90,
        Mathematics: 95,
        Physics: 88,
        Chemistry: 84,
        Biology: 82,
    },
    s6 = {
        Bangla: 60,
        English: 68,
        Mathematics: 98,
        Physics: 88,
        Chemistry: 82,
        Biology: 72,
    },
    s7 = {
        Bangla: 64,
        English: 65,
        Mathematics: 81,
        Physics: 85,
        Chemistry: 77,
        Biology: 74,
    },
    s8 = {
        Bangla: 55,
        English: 52,
        Mathematics: 68,
        Physics: 61,
        Chemistry: 59,
        Biology: 85,
    },
    s9 = {
        Bangla: 80,
        English: 94,
        Mathematics: 100,
        Physics: 94,
        Chemistry: 92,
        Biology: 89,
    },
    s10 = {
        Bangla: 82,
        English: 87,
        Mathematics: 88,
        Physics: 90,
        Chemistry: 85,
        Biology: 92,
    }

]


let sum = 0
for (let i = 0; i < students.length; i++) {
    let student = students[i]
    let studentNo = students.indexOf(student) + 1;
    for (let m in student) {
        sum += student[m]
    }
    if (student) {
        //console.log(sum);
        console.log(`S${studentNo}- No Student's Totall markes: ${sum}`);
        sum = 0
    }
}


