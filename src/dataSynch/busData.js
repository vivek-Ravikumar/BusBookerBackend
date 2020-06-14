const Bus = require("../models/bus");
require("../config/dbconnect");
const busData = [
  {
    busName: "YBM",
    source: "Chennai",
    destination: "Coimbatore",
    time: "6 AM",
    seats: [
      {
        sNumber: "1",
        available: true
      },
      {
        sNumber: "2",
        available: true
      },
      {
        sNumber: "3",
        available: true
      },
      {
        sNumber: "4",
        available: true
      },
      {
        sNumber: "5",
        available: true
      },
      {
        sNumber: "6",
        available: true
      },
      {
        sNumber: "7",
        available: true
      },
      {
        sNumber: "8",
        available: true
      },
      {
        sNumber: "9",
        available: true
      },
      {
        sNumber: "10",
        available: true
      },
      {
        sNumber: "11",
        available: true
      },
      {
        sNumber: "12",
        available: true
      }
    ]
  },
  {
    busName: "Parbeen",
    source: "Chennai",
    destination: "Coimbatore",
    time: "9 AM",
    seats: [
      {
        sNumber: "1",
        available: true
      },
      {
        sNumber: "2",
        available: true
      },
      {
        sNumber: "3",
        available: true
      },
      {
        sNumber: "4",
        available: true
      },
      {
        sNumber: "5",
        available: true
      },
      {
        sNumber: "6",
        available: true
      },
      {
        sNumber: "7",
        available: true
      },
      {
        sNumber: "8",
        available: true
      },
      {
        sNumber: "9",
        available: true
      },
      {
        sNumber: "10",
        available: true
      },
      {
        sNumber: "11",
        available: true
      },
      {
        sNumber: "12",
        available: true
      }
    ]
  },
  {
    busName: "SRM",
    source: "Bangalore",
    destination: "Coimbatore",
    time: "10 PM",
    seats: [
      {
        sNumber: "1",
        available: true
      },
      {
        sNumber: "2",
        available: true
      },
      {
        sNumber: "3",
        available: true
      },
      {
        sNumber: "4",
        available: true
      },
      {
        sNumber: "5",
        available: true
      },
      {
        sNumber: "6",
        available: true
      },
      {
        sNumber: "7",
        available: true
      },
      {
        sNumber: "8",
        available: true
      },
      {
        sNumber: "9",
        available: true
      },
      {
        sNumber: "10",
        available: true
      },
      {
        sNumber: "11",
        available: true
      },
      {
        sNumber: "12",
        available: true
      }
    ]
  },
  {
    busName: "KPN",
    source: "Bangalore",
    destination: "Coimbatore",
    time: "6 PM",
    seats: [
      {
        sNumber: "1",
        available: true
      },
      {
        sNumber: "2",
        available: true
      },
      {
        sNumber: "3",
        available: true
      },
      {
        sNumber: "4",
        available: true
      },
      {
        sNumber: "5",
        available: true
      },
      {
        sNumber: "6",
        available: true
      },
      {
        sNumber: "7",
        available: true
      },
      {
        sNumber: "8",
        available: true
      },
      {
        sNumber: "9",
        available: true
      },
      {
        sNumber: "10",
        available: true
      },
      {
        sNumber: "11",
        available: true
      },
      {
        sNumber: "12",
        available: true
      }
    ]
  },
  {
    busName: "YBM",
    source: "Chennai",
    destination: "Ooty",
    time: "10 PM",
    seats: [
      {
        sNumber: "1",
        available: true
      },
      {
        sNumber: "2",
        available: true
      },
      {
        sNumber: "3",
        available: true
      },
      {
        sNumber: "4",
        available: true
      },
      {
        sNumber: "5",
        available: true
      },
      {
        sNumber: "6",
        available: true
      },
      {
        sNumber: "7",
        available: true
      },
      {
        sNumber: "8",
        available: true
      },
      {
        sNumber: "9",
        available: true
      },
      {
        sNumber: "10",
        available: true
      },
      {
        sNumber: "11",
        available: true
      },
      {
        sNumber: "12",
        available: true
      }
    ]
  },
  {
    busName: "KMT",
    source: "Chennai",
    destination: "Ooty",
    time: "12 PM",
    seats: [
      {
        sNumber: "1",
        available: true
      },
      {
        sNumber: "2",
        available: true
      },
      {
        sNumber: "3",
        available: true
      },
      {
        sNumber: "4",
        available: true
      },
      {
        sNumber: "5",
        available: true
      },
      {
        sNumber: "6",
        available: true
      },
      {
        sNumber: "7",
        available: true
      },
      {
        sNumber: "8",
        available: true
      },
      {
        sNumber: "9",
        available: true
      },
      {
        sNumber: "10",
        available: true
      },
      {
        sNumber: "11",
        available: true
      },
      {
        sNumber: "12",
        available: true
      }
    ]
  },
  {
    busName: "KSRTC",
    source: "Delhi",
    destination: "Coimbatore",
    time: "8 PM",
    seats: [
      {
        sNumber: "1",
        available: true
      },
      {
        sNumber: "2",
        available: true
      },
      {
        sNumber: "3",
        available: true
      },
      {
        sNumber: "4",
        available: true
      },
      {
        sNumber: "5",
        available: true
      },
      {
        sNumber: "6",
        available: true
      },
      {
        sNumber: "7",
        available: true
      },
      {
        sNumber: "8",
        available: true
      },
      {
        sNumber: "9",
        available: true
      },
      {
        sNumber: "10",
        available: true
      },
      {
        sNumber: "11",
        available: true
      },
      {
        sNumber: "12",
        available: true
      }
    ]
  },
  {
    busName: "Sree",
    source: "Delhi",
    destination: "Coimbatore",
    time: "7 AM",
    seats: [
      {
        sNumber: "1",
        available: true
      },
      {
        sNumber: "2",
        available: true
      },
      {
        sNumber: "3",
        available: true
      },
      {
        sNumber: "4",
        available: true
      },
      {
        sNumber: "5",
        available: true
      },
      {
        sNumber: "6",
        available: true
      },
      {
        sNumber: "7",
        available: true
      },
      {
        sNumber: "8",
        available: true
      },
      {
        sNumber: "9",
        available: true
      },
      {
        sNumber: "10",
        available: true
      },
      {
        sNumber: "11",
        available: true
      },
      {
        sNumber: "12",
        available: true
      }
    ]
  },
  {
    busName: "VIP",
    source: "Pune",
    destination: "Coimbatore",
    time: "7 PM",
    seats: [
      {
        sNumber: "1",
        available: true
      },
      {
        sNumber: "2",
        available: true
      },
      {
        sNumber: "3",
        available: true
      },
      {
        sNumber: "4",
        available: true
      },
      {
        sNumber: "5",
        available: true
      },
      {
        sNumber: "6",
        available: true
      },
      {
        sNumber: "7",
        available: true
      },
      {
        sNumber: "8",
        available: true
      },
      {
        sNumber: "9",
        available: true
      },
      {
        sNumber: "10",
        available: true
      },
      {
        sNumber: "11",
        available: true
      },
      {
        sNumber: "12",
        available: true
      }
    ]
  },
  {
    busName: "SRT",
    source: "Pune",
    destination: "Coimbatore",
    time: "5 PM",
    seats: [
      {
        sNumber: "1",
        available: true
      },
      {
        sNumber: "2",
        available: true
      },
      {
        sNumber: "3",
        available: true
      },
      {
        sNumber: "4",
        available: true
      },
      {
        sNumber: "5",
        available: true
      },
      {
        sNumber: "6",
        available: true
      },
      {
        sNumber: "7",
        available: true
      },
      {
        sNumber: "8",
        available: true
      },
      {
        sNumber: "9",
        available: true
      },
      {
        sNumber: "10",
        available: true
      },
      {
        sNumber: "11",
        available: true
      },
      {
        sNumber: "12",
        available: true
      }
    ]
  }
];

const busDataSynch = () => {
  busData.map(async bus => {
    const newBus = new Bus({
      busName: bus.busName,
      source: bus.source,
      destination: bus.destination,
      seats: bus.seats,
      time: bus.time
    });
    try {
      const result = await newBus.save();
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  });
};

busDataSynch();

const clearBus = () => {
  Bus.deleteMany({})
    .then(console.log)
    .catch(console.error);
};

//clearBus();
