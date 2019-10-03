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
        name: 'Laravel',
        checked: ['checked', 'checked', 'checked', '', ' ']
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
        name: 'jobspost',
        description: 'jobspost-description',
        tech_row: ['HTML', 'SCSS', 'JS', 'PHP', 'MySQL', 'CentOS'],
        link: [{ type: 'demo', href: 'https://www.jobspost.com.hk/' }],
        img: ''
    });
    profileData.push({
        name: 'skzgroup',
        description: 'skzgroup-description',
        tech_row: ['HTML', 'SCSS', 'JS', 'PHP', 'Google API'],
        link: [{ type: 'demo', href: 'https://www.skzgroup.com.hk/' }],
        img: ''
    });
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
        { type: 'github', href: 'https://github.com/edward100826/FinalYearProject' }],
        img: ''
    });
    profileData.push({
        name: 'android-final',
        description: 'android-final-description',
        tech_row: ['Android', 'Firebase'],
        link: [
          { type: 'github', href: 'https://github.com/ngSgn/ntutAndroidFinal' }],
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
        name: 'drright',
        description: 'drright-description',
        tech_row: ['React.js', 'CSS', 'Redux'],
        link: [
          { type: 'demo', href: 'https://www.drright.me/' }
        ],
        img: ''
    });
    profileData.push({
        name: 'mittp2017',
        description: 'mittp2017-description',
        tech_row: ['React', 'QGIS'],
        link: [
          { type: 'github', href: 'https://github.com/edward100826/MIT_Taipei17' }
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
            '<div class="col-xl-4 col-md-6 profile-card"><div class="card-box"><div class="row card-h"><div class="card-flip"><div class="flip"><div class="back" style="background-image: url(' +
            element.img +
            ');"><div class="back-box"><div>' +
            backData +
            '</div></div></div><div class="card-bg" style="background-image: url(' +
            element.img +
            ');"></div><div class="front"><div class="profile-des-box"><h5 key="' +
            element.name +
            '"></h5><hr /><p key="' +
            element.description +
            '"></p></div><div class="tech-row"><hr />' +
            techData +
            '</div></div></div></div></div></div></div>';
        var rowDiv = document.getElementById('profile-row');
        rowDiv.insertAdjacentHTML('beforeend', html);
    });
}