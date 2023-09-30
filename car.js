$(document).ready(function () {
  $(".mobile-nav i").click(function () {
    $(".site-nav-menu").toggleClass("mobile-menu");
  });

  $(".toggle").on("click", function () {
    if ($(".item").hasClass("active")) {
      $(".item").removerClass("active");
    } else {
      $(".item").addClass("active");
    }
  });

  const cars = [
    {
      id: 1,
      name: "Ferrari 275",
      price: 300000,
      description:
        "Italian Luxury sports car manufacturer based in Maranello Italy ",
    },
    {
      id: 2,
      name: "Ford Mustang",
      price: 250000,
      description:
        "Mustang was developed as a highly styled line of sporty coupes and conertibles",
    },
    {
      id: 3,
      name: "Porsche",
      price: 300000,
      description: "Porsche is a German luxury and sports car manufacturer,",
    },
    {
      id: 4,
      name: "Bugatti Divo",
      price: 2500000,
      description:
        "German then French manufacturer of high-performance automobiles. ",
    },

    {
      id: 5,
      name: "BMW",
      price: 200000,
      description: "The first Generation BMW 1series",
    },

    {
      id: 6,
      name: "Mercedes benz",
      price: 300000,
      description: "The new A-Class limousine striking design&elegance",
    },
    {
      id: 7,
      name: "Nissan GTR 35",
      price: 310000,
      description:
        "Mustang was developed as a highly styled line of sporty coupes and conertibles",
    },
    {
      id: 8,
      name: "Lamborghini",
      price: 370000,
      description:
        "Mustang was developed as a highly styled line of sporty coupes and conertibles",
    },
    {
      id: 9,
      name: "Bentley",
      price: 350000,
      description:
        "Mustang was developed as a highly styled line of sporty coupes and conertibles",
    },
  ];

  $(".btn-details").click(function () {
    const carId = $(this).data("car-id");
    const car = cars.find((car) => car.id === carId);

    if (car) {
      $("#car-details").html(`
              <h2>${car.name}</h2>
              <p>Price: $${car.price}</p>
              <p>${car.description}</p>
          `);
    }
  });
});
