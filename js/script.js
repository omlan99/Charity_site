// getting the history and donation button
let donationBtn = getMyId("donationBtn");
let historyBtn = getMyId("historyBtn");

// adding an eventlisitener to donationBtn
donationBtn.addEventListener("click", function () {
  // Adding background color and text color
  donationBtn.classList.add("bg-[#b4f461]", "text-black");

  // Removing the hidden class to display
  getMyId("donateCard").classList.remove("hidden");
  // Adding hidden class to history to hide
  getMyId("history").classList.add("hidden");
  // Removing text styles historyBtn
  historyBtn.classList.remove("bg-[#b4f461]", "text-black");
  // Adding text styles historyBtn
  historyBtn.classList.add("bg-neutral-50", "text-gray-400");
});
historyBtn.addEventListener("click", function () {
  // Removing background color and text color
  historyBtn.classList.remove("bg-neutral-50", "text-gray-400");
  // Adding background color and text color
  historyBtn.classList.add("bg-[#b4f461]", "text-black");
  // Adding hidden class to doanteCard to hide
  getMyId("donateCard").classList.add("hidden");
  // Removing the hidden class to display
  getMyId("history").classList.remove("hidden");

  // Removing text styles donationBtn
  donationBtn.classList.remove("bg-[#b4f461]", "text-black");
  // Adding text styles donationBtn
  donationBtn.classList.add("text-gray-400");
});

// Attach event listeners to the "Donate Now" buttons
getMyId("donate").addEventListener("click", function () {
  handleDonation("donateAmount", "donatedBalance", "heading1");
});

getMyId("donate2").addEventListener("click", function () {
  handleDonation("donateAmount2", "donatedBalance2", "heading2");
});

getMyId("donate3").addEventListener("click", function () {
  handleDonation("donateAmount3", "donatedBalance3", "heading3");
});
