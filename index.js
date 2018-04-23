// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location) {
  const filtered = drivers.filter(function(driver) { return driver.hometown === location; });
  return logDriverNames(filtered);
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function(driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  });
}

function driversByName(drivers) {
  return drivers.slice().sort(function(driver1, driver2) {
    return (driver1.name).localeCompare(driver2.name);
  });
}

function totalRevenue(drivers) {
  return drivers.reduce((acc, driver) => { return acc + driver.revenue; }, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
