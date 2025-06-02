// – Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
//
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
//
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
    ];

const container = document.getElementById('course-container');


for (const coursesArrayElement of coursesArray) {
    const h2 = document.createElement('h2');
    h2.innerText = `title: ${coursesArrayElement.title}`;
    const pMonthDuration = document.createElement('p');
    pMonthDuration.classList.add('p-monthDuration');
    pMonthDuration.innerText = `monthDuration: ${coursesArrayElement.monthDuration}`;
    const pHourDuration = document.createElement('p');
    pHourDuration.classList.add('p-hourDuration');
    pHourDuration.innerText = `hourDuration: ${coursesArrayElement.hourDuration}`;

    const ulModul = document.createElement('ul');
    for (const module of coursesArray) {
        const li = document.createElement('li');
            li.innerText = `modules: ${module.modules}`;
            ulModul.appendChild(li);

    }
    container.append(h2,pMonthDuration,pHourDuration,ulModul);



}
document.body.appendChild(container);



