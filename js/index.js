import { recommendations, services, testimonials } from "./constant.js";

const testimonial = {
  starIcon: "./assets/icons/star.svg",
  starIconAlt: "star-icon",
};

const getRandomStars = (min = 3, max = 5) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const truncateText = (text, charLimit) => {
  if (text.length > charLimit) {
    return text.slice(0, charLimit) + "...";
  }
  return text;
};

const generateStars = (count) => {
  return Array.from(
    { length: count },
    () => `
      <img src="${testimonial.starIcon}" alt="${testimonial.starIconAlt}" width="20" height="20">
  `
  ).join("");
};
const reccomendationContent = () => {
  return recommendations
    .map((reccomendation) => {
      return `
      <div class="reccomendation__card">
        <img src="${reccomendation.image}" alt="${reccomendation.alt}">
        <div class="reccomendation__card-body">
          <h3>${reccomendation.title}</h3>
          <p>${truncateText(reccomendation.description, 98)}</p>
          <p class="price">$ 210 / person</p>
        </div>
        <button>View More</button>
      </div>
    `;
    })
    .join("");
};

const serviceContent = () => {
  return services
    .map((service) => {
      return `
    <div class="service__card">
      <img src="${service.image}" alt="${service.alt}" width="60" height="60">
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    </div>`;
    })
    .join("");
};

const testimonialialContent = () => {
  const starCount = getRandomStars();
  const stars = generateStars(starCount);
  return testimonials
    .map((testimonial) => {
      return `
      <div class="testimonial__card">
          <div class="stars">
            ${stars}
          </div>
          <p>"${testimonial.text}".</p>
          <div class="testimonial__card-footer">
            <img src="${testimonial.avatar}" alt="${testimonial.avatarAlt}" width="50" height="50" class="avatar">
            <div>
              <h3>${testimonial.name}</h3>
              <h4>${testimonial.role}</h4>
            </div>
          </div>
        </div>
    `;
    })
    .join("");
};

document.addEventListener("DOMContentLoaded", () => {
  const reccomendationContainer = document.getElementById(
    "reccomendationContent"
  );
  reccomendationContainer.innerHTML = reccomendationContent();

  const serviceContainer = document.getElementById("serviceContent");
  serviceContainer.innerHTML = serviceContent();

  const testimonialContainer = document.getElementById("testimonialContent");
  testimonialContainer.innerHTML = testimonialialContent();
});
