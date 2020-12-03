// import Classroom from '../../../models/classroom';
// import Student from '../../../models/student';

const Classroom = require('../../../models/classroom');
const Student = require('../../../models/student').default;

class ClassroomController {
  async getById(req, res) {
    const { id } = req.params;
    const classroom = await Classroom.findByPk(id, {
      include: [
        {
          model: Student,
          as: 'students',
        },
      ],
    });
    return res.status(200).json({
      classroom,
      message: `Classroom retrieved successfully.`,
    });
  }

  async index(req, res) {
    return Classroom.findAll({
      include: [
        {
          model: Student,
          as: 'students',
        },
      ],
      order: [
        ['createdAt', 'DESC'],
        [{ model: Student, as: 'students' }, 'createdAt', 'DESC'],
      ],
    })
      .then(classrooms =>
        res.status(200).json({
          classrooms,
          message: `Classroom retrieved successfully.`,
        })
      )
      .catch(error => res.status(400).json(error));
    // return res.status(200).json({
    //   classrooms: classroom,
    //   message: `Classroom retrieved successfully.`,
    // });
  }
}

export default new ClassroomController();
