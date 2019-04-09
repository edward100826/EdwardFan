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
function InitLanguagesData() {
  languagesData.push({
    name: 'Cantonese (Native)',
    checked: ['checked', 'checked', 'checked', 'checked', 'checked']
  });
  languagesData.push({
    name: 'Mandarin',
    checked: ['checked', 'checked', 'checked', 'checked', 'checked']
  });
  languagesData.push({
    name: 'English',
    checked: ['checked', 'checked', 'checked', 'checked', ' ']
  });
  languagesData.push({
    name: 'Spanish',
    checked: ['checked', 'checked', 'checked', '', ' ']
  });
  languagesData.push({
    name: 'Malay',
    checked: ['checked', 'checked', 'checked', '', ' ']
  });
  languagesData.push({
    name: 'Korean',
    checked: ['checked', 'checked', '', '', ' ']
  });
  languagesData.push({
    name: 'Japanese',
    checked: ['checked', 'checked', '', '', ' ']
  });
  AddSkillElement(languagesData, 'languages-row');
}
function InitProfileData() {
  profileData.push({
    name: 'edwardfan.nhz.hk',
    description: 'My personal website. (This Website)',
    tech_row: ['HTML', 'SCSS', 'JS'],
    link: [{ type: 'Github', href: 'https://github.com/edward100826/EdwardFan' }],
    img: ''
  });
  profileData.push({
    name: 'Final Year Project',
    description:
      'It is about collecting data from Taipei government and analysing the data with useful results.',
    tech_row: ['PHP', 'MySQL'],
    link: [
      { type: 'Github', href: 'https://github.com/edward100826/FinalYearProject' },
    ],
    img: ''
  });
  profileData.push({
    name: 'NTUT Empty Classroom',
    description:
      'The Android final project about searching for empty classroom in NTUT.',
    tech_row: ['Android', 'Firebase', 'Teamwork'],
    link: [
      { type: 'Github', href: 'https://github.com/ngSgn/ntutAndroidFinal' }
    ],
    img: './img/portfolio/NTUT_emptyClassroom.png'
  });
  profileData.push({
    name: 'Colorpella',
    description:
      'It is a freelance android app which is detecting the color and the sound frequency and sending the corresponding signal to arduino.',
    tech_row: ['Android', 'JAVA', 'Teamwork'],
    link: [
      { type: 'Github', href: 'https://github.com/ngSgn/ColorPlayer' },
      {
        type: 'About',
        href:
          'https://github.com/ngSgn/ColorPlayer/blob/master/%E8%AA%AA%E6%98%8E.pdf'
      }
    ],
    img: './img/portfolio/colorpella.jpeg'
  });
  profileData.push({
    name: 'NTUT HKSA',
    description:
        "The final project of the Web Programming class. It is a register and information system for NTUT's Hong Kong students.",
    tech_row: ['HTML', 'CSS', 'Firebase', 'Teamwork'],
    link: [
      { type: 'Github', href: 'https://github.com/ngSgn/FinalWebProject' },
      { type: 'Demo', href: 'https://ngsgn.github.io/FinalWebProject/' }
    ],
    img: './img/portfolio/ntut_hksd.png'
  });
  profileData.push({
    name: 'MIT Taipei 2017',
    description:
        "The group product of the workshop of MIT Taipei 2017.",
    tech_row: ['React', 'QGIS', 'Teamwork'],
    link: [
      { type: 'Github', href: 'https://github.com/edward100826/MIT_Taipei17' },
    ],
    img: ''
  });
  profileData.push({
    name: 'Project Nazca Server Website',
    description:
        "The official website for Project Nazca Server.",
    tech_row: ['PHP', 'HTML', 'CSS'],
    link: [
      { type: 'Github', href: 'https://github.com/edward100826/Project-Nazca-Server-Website' },
      { type: 'Demo', href: 'http://www.projectnazca.nhz.hk' }
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
        '" target="_blank"><p>' +
        element.type +
        '</p></a>';
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
      ');"></div><div class="front"><div class="profile-des-box"><h5>' +
      element.name +
      '</h5><hr /><p>' +
      element.description +
      '</p></div><div class="tech_row"><hr />' +
      techData +
      '</div></div></div></div></div></div></div>';
    var rowDiv = document.getElementById('profile-row');
    rowDiv.insertAdjacentHTML('beforeend', html);
  });
}
