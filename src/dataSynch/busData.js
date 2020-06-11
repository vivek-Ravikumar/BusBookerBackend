const Bus = require("../models/bus");
require("../config/dbconnect");
const busData = [
  {
    busName: "YBM",
    source: "chennai",
    destination: "coimbatore",
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
      }
    ]
  },
  {
    busName: "YBM",
    source: "Pune",
    destination: "chennai",
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
      }
    ]
  },
  {
    busName: "YBM",
    source: "Bangalore",
    destination: "coimbatore",
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
      }
    ]
  },
  {
    busName: "YBM",
    source: "Delhi",
    destination: "coimbatore",
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
      }
    ]
  },
  {
    busName: "YBM",
    source: "chennai",
    destination: "ooty",
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
      }
    ]
  }
];

const busDataSynch = async () => {
  busData.map(async bus => {
    const newBus = new Bus({
      busName: bus.busName,
      source: bus.source,
      destination: bus.destination,
      seats: bus.seats
    });
    const result = await newBus.save();
  });
};

busDataSynch();
