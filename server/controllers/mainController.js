// get home
exports.homepage = async (req, res) => {
  const locals = {
    title: "Notes",
    description: " Free Notes App ",
  };
  res.render("index", {
    locals,
    layout: "../views/layouts/front-page",
  });
};
// get about
exports.about = async (req, res) => {
  const locals = {
    title: "About - Notes",
    description: " Free Notes App ",
  };
  res.render("about", locals);
};
