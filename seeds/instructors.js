exports.seed = function(knex, Promise){
  return Promise.join(
    knex("instructors").del(),
    knex("instructors").insert({
      first_name: "Brett",
      last_name: "Sherman"
    })
  )
}
