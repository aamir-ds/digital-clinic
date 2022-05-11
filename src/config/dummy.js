const clinics = [
    {
        id: 796263,
        name: 'Name of clinic',
        distance: '68km',
        address: '987 Blaise Drive Suite 420',
        ratings: '4.7',
        image: require('../assets/images/clinic.jpg')
    },
    {
        id: 89562,
        name: 'name of clinic',
        distance: '68km',
        address: '987 Blaise Drive Suite 420',
        ratings: '4.0',
        image: require('../assets/images/clinic.jpg')
    },
    {
        id: 89847652,
        name: 'Name of clinic',
        distance: '68km',
        address: '987 Blaise Drive Suite 420',
        ratings: '4.0',
        image: require('../assets/images/clinic.jpg')
    },
    {
        id: 98966,
        name: 'name of clinic',
        distance: '68km',
        address: '987 Blaise Drive Suite 420',
        ratings: '4.0',
        image: require('../assets/images/clinic.jpg')
    },
    {
        id: 9541632,
        name: 'name of clinic',
        distance: '68km',
        address: '987 Blaise Drive Suite 420',
        ratings: '4.0',
        image: require('../assets/images/clinic.jpg')
    },
    {
        id: 79632,
        name: 'name of clinic',
        distance: '68km',
        address: '987 Blaise Drive Suite 420',
        ratings: '4.0',
        image: require('../assets/images/clinic.jpg')
    },
    {
        id: 98662,
        name: 'name of clinic',
        distance: '68km',
        address: '987 Blaise Drive Suite 420',
        ratings: '4.0',
        image: require('../assets/images/clinic.jpg')
    },
    {
        id: 99632,
        name: 'name of clinic',
        distance: '68km',
        address: '987 Blaise Drive Suite 420',
        ratings: '4.0',
        image: require('../assets/images/clinic.jpg')
    },
    {
        id: 995862,
        name: 'name of clinic',
        distance: '68km',
        address: '987 Blaise Drive Suite 420',
        ratings: '4.0',
        image: require('../assets/images/clinic.jpg')
    },
    {
        id: 9862554,
        name: 'name of clinic',
        distance: '68km',
        address: '987 Blaise Drive Suite 420',
        ratings: '4.0',
        image: require('../assets/images/clinic.jpg')
    },
]

const doctors = [
    {
        id: 9461,
        name: 'Chikanso Chima',
        type: 'Ophthalmologist',
        distance: '68km',
        ratings: '4.7',
        reviews: '12',
        video: true,
        online: true,
        fees: 125,
        location: 'New york',
        experience: 20,
        image: require('../assets/images/clinic.jpg')
    },
    {
        id: 84961,
        name: 'Chikanso Chima',
        type: 'Ophthalmologist',
        distance: '68km',
        ratings: '4.7',
        reviews: '12',
        video: false,
        online: true,
        fees: 125,
        location: 'New york',
        experience: 20,
        image: require('../assets/images/clinic.jpg')
    },
    {
        id: 84913,
        name: 'Chikanso Chima',
        type: 'Ophthalmologist',
        distance: '68km',
        ratings: '4.7',
        reviews: '12',
        video: true,
        online: true,
        fees: 125,
        location: 'New york',
        experience: 20,
        image: require('../assets/images/clinic.jpg')
    },
    {
        id: 849163,
        name: 'Chikanso Chima',
        type: 'Ophthalmologist',
        distance: '68km',
        ratings: '4.7',
        reviews: '12',
        video: true,
        online: true,
        fees: 125,
        location: 'New york',
        experience: 20,
        image: require('../assets/images/clinic.jpg')
    },
    {
        id: 895233,
        name: 'Chikanso Chima',
        type: 'Ophthalmologist',
        distance: '68km',
        ratings: '4.7',
        reviews: '12',
        video: false,
        online: true,
        fees: 125,
        location: 'New york',
        experience: 20,
        image: require('../assets/images/clinic.jpg')
    },
    {
        id: 7956336,
        name: 'Chikanso Chima',
        type: 'Ophthalmologist',
        distance: '68km',
        ratings: '4.7',
        reviews: '12',
        video: false,
        online: true,
        fees: 125,
        location: 'New york',
        experience: 20,
        image: require('../assets/images/clinic.jpg')
    },
]

const paymentMethods = [
    {
        id: 1,
        name: 'visa',
        checked: true
    },
    {
        id: 2,
        name: 'mastercard',
        checked: false
    },
    {
        id: 3,
        name: 'paypal',
        checked: false
    },
    {
        id: 4,
        name: 'pay',
        checked: false
    },
]

const homePageListing = [
    {
        name: 'Doctors',
        description: 'Short description',
        id: 849411,
        icon: 'doctor',
        navigate: 'All Doctors'
    },
    {
        name: 'Clinics',
        description: 'Short description',
        id: 49416,
        icon: 'hospital-building',
        navigate: 'Clinics'
    },
    {
        name: 'Specialities',
        description: 'Short description',
        id: 491631,
        icon: 'heart-pulse',
        navigate: 'All Doctors'
    },
    {
        name: 'Labs',
        description: 'Short description',
        id: 88494,
        icon: 'flask-outline',
        navigate: 'All Doctors'
    },
    {
        name: 'Insurance',
        description: 'Short description',
        id: 84941,
        icon: 'newspaper-variant-outline',
        navigate: 'All Doctors'
    },
    {
        name: 'Document Uploads',
        description: 'Short description',
        id: 849431,
        icon: 'upload',
        navigate: 'Document Upload'
    }
    // {
    //     name: 'Related Articles',
    //     description: 'Short description',
    //     id: 849431,
    //     icon: 'newspaper-variant-multiple',
    //     navigate: 'All Doctors'
    // }
]

const doctorVisitAnswer = [
    {
        id: '1',
        answer: 'Once',
    }, {
        id: '2',
        answer: 'More than once',
    }
    , {
        id: '3',
        answer: 'Less than once',
    }
]
const cornicAnswer = [
    {
        id: '1',
        answer: 'No',
    }, {
        id: '2',
        answer: 'Yes',
    }
]
const OnBoardingQuestion = [
    {
        id: '1',
        question: 'How many times a year do you visit general practitioner?',
    }, {
        id: '2',
        question: 'Do you have chronic conditions?',
    }
];

const TimeSlots = [
    {
        id: 1,
        time: "13:00 AM",
        checked: true
    },
    {
        id: 2,
        time: "13:30 AM",
        checked: false
    },
    {
        id: 3,
        time: "14:00 AM",
        checked: false
    },
    {
        id: 4,
        time: "14:30 AM",
        checked: false
    },
    {
        id: 5,
        time: "15:00 AM",
        checked: false
    },
    {
        id: 6,
        time: "15:30 AM",
        checked: false
    },
    {
        id: 7,
        time: "16:00 AM",
        checked: false
    },
    {
        id: 8,
        time: "16:30 AM",
        checked: false
    },
]




export { clinics, doctors, paymentMethods, homePageListing, doctorVisitAnswer, OnBoardingQuestion, cornicAnswer, TimeSlots }