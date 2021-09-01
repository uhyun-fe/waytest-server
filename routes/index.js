module.exports = function (app, Counter) {
   // GET My Counter
   app.get("/api/count", function (req, res) {
      Counter.findOne({ _id: 0 }, function (err, counter) {
         if (err) return res.status(500).json({ error: err });
         if (!counter) return res.status(404).json({ error: "counter not found" });
         res.json(counter);
      });
   });

   // UPDATE THE Counter
   app.put("/api/count", function (req, res) {
      Counter.findById(0, function (err, counter) {
         if (err) return res.status(500).json({ error: "database failure" });
         if (!counter) return res.status(404).json({ error: "counter not found" });

         counter.visit = counter.visit + 1;

         counter.save(function (err) {
            if (err) res.status(500).json({ error: "failed to update" });
            res.json({ message: "counter updated" });
         });
      });
   });
};
