var programData = [];
var editingData = [];
var languagesData = [];
var profileData = [];
InitProgramData();
InitEditingData();
InitLanguagesData();
InitProfileData();
function AddSkillElement(array, row) {
    array.forEach(element => {
        var html =
            '<div class="col-md-6 skill-box"><div class="skill-name"><p>' +
            element.name +
            '</p></div><div class="skill-star"><span class="' +
            element.checked[0] +
            '">★</span><span class="' +
            element.checked[1] +
            '">★</span><span class="' +
            element.checked[2] +
            '">★</span><span class="' +
            element.checked[3] +
            '">★</span><span class="' +
            element.checked[4] +
            '">★</span></div></div>';
        var rowDiv = document.getElementById(row);
        rowDiv.insertAdjacentHTML('beforeend', html);
    });
}
function InitProgramData() {
    programData.push({
        name: 'HTML',
        checked: ['checked', 'checked', 'checked', 'checked', 'checked']
    });
    programData.push({
        name: 'CSS',
        checked: ['checked', 'checked', 'checked', 'checked', 'checked']
    });
    programData.push({
        name: 'Boostrap',
        checked: ['checked', 'checked', 'checked', 'checked', 'checked']
    });
    programData.push({
        name: 'Python',
        checked: ['checked', 'checked', 'checked', 'checked', 'checked']
    });
    programData.push({
        name: 'PHP',
        checked: ['checked', 'checked', 'checked', 'checked', ' ']
    });
    programData.push({
        name: 'MySQL',
        checked: ['checked', 'checked', 'checked', 'checked', ' ']
    });
    programData.push({
        name: 'React',
        checked: ['checked', 'checked', 'checked', 'checked', ' ']
    });
    programData.push({
        name: 'C/C++',
        checked: ['checked', 'checked', 'checked', 'checked', ' ']
    });
    programData.push({
        name: 'Firebase',
        checked: ['checked', 'checked', 'checked', '', ' ']
    });
    programData.push({
        name: 'Angular',
        checked: ['checked', 'checked', 'checked', '', ' ']
    });
    programData.push({
        name: 'SCSS',
        checked: ['checked', 'checked', 'checked', '', ' ']
    });
    programData.push({
        name: 'Java',
        checked: ['checked', 'checked', 'checked', '', ' ']
    });
    AddSkillElement(programData, 'program-row');
}
function InitEditingData() {
    editingData.push({
        name: 'Microsoft Word',
        checked: ['checked', 'checked', 'checked', 'checked', 'checked']
    });
    editingData.push({
        name: 'Microsoft Excel',
        checked: ['checked', 'checked', 'checked', 'checked', 'checked']
    });
    editingData.push({
        name: 'Microsoft PowerPoint',
        checked: ['checked', 'checked', 'checked', 'checked', 'checked']
    });
    editingData.push({
        name: 'Adobe Dreamweaver',
        checked: ['checked', 'checked', 'checked', 'checked', 'checked']
    });
    editingData.push({
        name: 'Adobe Photoshop',
        checked: ['checked', 'checked', 'checked', '', ' ']
    });
    AddSkillElement(editingData, 'editing-row');
}
function AddLanguageElement(array, row) {
    array.forEach(element => {
        var html =
            '<div class="col-md-6 skill-box"><div class="skill-name"><p key="' +
            element.name +
            '"></p></div><div class="skill-star"><span class="' +
            element.checked[0] +
            '">★</span><span class="' +
            element.checked[1] +
            '">★</span><span class="' +
            element.checked[2] +
            '">★</span><span class="' +
            element.checked[3] +
            '">★</span><span class="' +
            element.checked[4] +
            '">★</span></div></div>';
        var rowDiv = document.getElementById(row);
        rowDiv.insertAdjacentHTML('beforeend', html);
    });
}
function InitLanguagesData() {
    languagesData.push({
        name: 'cantonese',
        checked: ['checked', 'checked', 'checked', 'checked', 'checked']
    });
    languagesData.push({
        name: 'mandarin',
        checked: ['checked', 'checked', 'checked', 'checked', 'checked']
    });
    languagesData.push({
        name: 'english',
        checked: ['checked', 'checked', 'checked', 'checked', ' ']
    });
    languagesData.push({
        name: 'spanish',
        checked: ['checked', 'checked', 'checked', '', ' ']
    });
    languagesData.push({
        name: 'malay',
        checked: ['checked', 'checked', 'checked', '', ' ']
    });
    languagesData.push({
        name: 'korean',
        checked: ['checked', 'checked', '', '', ' ']
    });
    languagesData.push({
        name: 'japanese',
        checked: ['checked', 'checked', '', '', ' ']
    });
    AddLanguageElement(languagesData, 'languages-row');
}
function InitProfileData() {
    profileData.push({
        name: 'personal',
        description: 'personal-description',
        tech_row: ['HTML', 'SCSS', 'JS', 'Google API'],
        link: [{ type: 'github', href: 'https://github.com/edward100826/EdwardFan' }],
        img: ''
    });
    profileData.push({
        name: 'fyp',
        description: 'fyp-description',
        tech_row: ['PHP', 'MySQL'],
        link: [
        { type: 'github', href: 'https://github.com/edward100826/FinalYearProject' },
        ],
        img: ''
    });
    profileData.push({
        name: 'android-final',
        description: 'android-final-description',
        tech_row: ['Android', 'Firebase'],
        link: [
          { type: 'github', href: 'https://github.com/ngSgn/ntutAndroidFinal' }
        ],
        img: './img/profile/NTUT_emptyClassroom.png'
    });
    profileData.push({
        name: 'colorpella',
        description: 'colorpella-description',
        tech_row: ['Android', 'JAVA'],
        link: [
          { type: 'github', href: 'https://github.com/ngSgn/ColorPlayer' },
          {
            type: 'about',
            href:
              'https://github.com/ngSgn/ColorPlayer/blob/master/%E8%AA%AA%E6%98%8E.pdf'
          }
        ],
        img: './img/profile/colorpella.jpeg'
    });
    profileData.push({
        name: 'ntuthksa',
        description: 'ntuthksa-description',
        tech_row: ['HTML', 'CSS', 'Firebase'],
        link: [
          { type: 'github', href: 'https://github.com/ngSgn/FinalWebProject' },
          { type: 'demo', href: 'https://ngsgn.github.io/FinalWebProject/' }
        ],
        img: './img/profile/ntut_hksa.png'
    });
    profileData.push({
        name: 'mittp2017',
        description: 'mittp2017-description',
        tech_row: ['React', 'QGIS'],
        link: [
          { type: 'github', href: 'https://github.com/edward100826/MIT_Taipei17' },
        ],
        img: ''
    });
    profileData.push({
        name: 'pns',
        description: 'pns-description',
        tech_row: ['PHP', 'HTML', 'CSS'],
        link: [
          { type: 'github', href: 'https://github.com/edward100826/Project-Nazca-Server-Website' },
          { type: 'demo', href: 'http://projectnazca.nhz.hk' }
        ],
        img: ''
    });
  

    profileData.forEach(element => {
        var backData = '';
        var techData = '';
        element.link.forEach(element => {
            backData +=
              '<a href="' +
              element.href +
              '" target="_blank"><p key="' +
              element.type +
              '"></p></a>';
        });
        element.tech_row.forEach(element => {
            techData += '<div class="tech-box">' + element + '</div>';
        });
        var html =
            '<div class="col-xl-4 col-md-6 col-12 profile-card"><div class="card-box"><div class="row card-h"><div class="card-flip"><div class="flip"><div class="back" style="background-image: url(' +
            element.img +
            ');"><div class="back-box"><div>' +
            backData +
            '</div></div></div><div class="card-bg" style="background-image: url(' +
            element.img +
            ');"></div><div class="front"><div class="profile-des-box"><h5 key="' +
            element.name +
            '"></h5><hr /><p key="' +
            element.description +
            '"></p></div><div class="tech_row"><hr />' +
            techData +
            '</div></div></div></div></div></div></div>';
        var rowDiv = document.getElementById('profile-row');
        rowDiv.insertAdjacentHTML('beforeend', html);
    });
}

setTimeout(() => {
    formatGoogleCalendar.init({
        calendarUrl: 'https://www.googleapis.com/calendar/v3/calendars/ntut.org.tw_mbok39gcoiftioqcea5814un38@group.calendar.google.com/events?key=AIzaSyChdNYlgRkwkAIRzFdEo9K_ESqMrtedLxI',
        past: false,
        upcoming: true,
        sameDayTimes: false,
        dayNames: true,
        pastTopN: -1,
        upcomingTopN: 3,
        itemsTagName: 'li',
        upcomingSelector: '#events-upcoming',
        recurringEvents: true,
        upcomingHeading: '<h2>To-Do List</h2>',
        pastHeading: '<h2>Past events</h2>',
        format: ['*date*', ': ', '*summary*'],
        timeMin: '2016-06-03T10:00:00-07:00',
        timeMax: '2020-06-03T10:00:00-07:00'
    });
}, 3000);