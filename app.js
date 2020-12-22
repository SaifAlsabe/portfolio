const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'Java', 'PHP', 'React',
    'Python', 'MongoDB', 'Node',
    'MySQL', 'GitHub', 'Redux',
    'Git', 'TypeScript', 'Linux'
];

var tagCloud = TagCloud('.skills', myTags, {

    // radius in px
    radius: 220,

    // animation speed
    // slow, normal, fast
    maxSpeed: 'normal',
    initSpeed: 'normal',

    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,

    // interact with cursor move on mouse out
    keep: true

});