// get dashboard
exports.dashboard = async (req, res) => {
  const locals = {
    title: "Dashboard",
    description: " Free Notes App ",
  };
  res.render("dashboard/index", {
    locals,
    layout: "../views/layouts/dashboard",
  });
};
