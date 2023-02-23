// const user = [ { id:1, name:'abul', job:'doctor'} ];
// console.log(user[0].job);

const data = {
    count : 5000,

    data:[
        { id:1, name:'babul',job:'leader'},
        { id:2, name:'gablu',job:'MP'},
],
    maruf:{
        address:{
            vilage:'satpur',
            upozila:'Bishwanath',
            zilla:'Sylhet',
            division:'sylhet',
        },
        study: {
            SSC:'HSDYKM-2014',
            HSC:'SKM-2016',
            GRADUATION:'SKM-2020',
        },
        meritalStatus:'Marreid',
        currentLocation:{
            street:44,
            house:62,
            floor:'second',
            side:'right',
        },
        job:'web developer',
    }
}
console.log(data.maruf.address.division)