app.get('/contact',isAuthenticated, (req, res) => {
    res.render('contact',{
        layout: 'layouts/main-layout',
    });
});
