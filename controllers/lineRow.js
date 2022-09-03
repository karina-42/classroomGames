const Question = require('../models/Question')

module.exports = {
  getQuestion: async (req, res) => {
    try {
      res.render('lineRow.ejs')
    } catch (error) {
      console.log(error);
    }
  }
  // getQuestions: async (req, res) => {
  //   try {
  //     const questionItem = await Question.find()
  //     res.render('lineRow.ejs', {question: questionItem})
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
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