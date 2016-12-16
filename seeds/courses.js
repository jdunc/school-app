exports.seed = function(knex, Promise){
  return Promise.join(
    knex("courses").del(),
    knex("courses").insert({
      course_name: "Philosophy of Mind",
      syllabus_table_id: "0010904"
    })
  )
}
