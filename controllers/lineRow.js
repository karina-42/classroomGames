const Question = require('../models/Question')

module.exports = {
  showPage: async(req, res) => {
    try {
      const question = await Question.find()
      res.render('lineRow.ejs', {zebra: question})
    } catch (error) {
      console.log(error);
    }
    
  },
  createQuestion: async(req, res) => {
    try {
      await Question.create({question: req.body.question})//the last part after body must be the same as name of the form input!!
      console.log('question added!');
      res.redirect('/lineRow')
    } catch (error) {
      console.log(error);
    }
  },
  deleteQuestion: async(req, res) => {
    try {
      await Question.findOneAndDelete({_id: req.params.id})
      console.log('deleted question');
      res.redirect('/lineRow')
    } catch (error) {
      console.log(error);
    }
  },
  // oneQuestion: async (req, res) => {
  //   try {
  //     await Question.countDocuments().exec(function (err, count) {
  //       let random = Math.floor(Math.random() * count)
  //       Question.findOne().skip(random).exec(
  //         function (err, result) {
  //           console.log(result);
  //           res.send(results)
  //         }
  //       )
  //     })
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  getQuestions: async (req, res) => {
    try {
      const questionItem = await Question.find()
      res.send({zebra: questionItem})
    } catch (error) {
      console.log(error);
    }
  }
}
  // getQuestion : async (req, res) => {
  //   try {

      // Questions.countDocuments().exec((err, count) => {
      //   let random = Math.floor(Math.random() * count)
      //   Questions.findOne().skip(random).exec(
      //     (err, result) => {
      //       res.render('lineRow.ejs', results)
      //       console.log(result);
      //     }
      //   )
      // })
//       res.render('lineRow.ejs')
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }