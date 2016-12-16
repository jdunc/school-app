exports.up = function(knex, Promise){
  return knex.schema.createTable("courses", function(table){
      table.increments("id");
      table.string("course_name");
      table.integer("syllabus_table_id");
  })
}

exports.down = function(knex, Promise){
  return knex.schema.dropTable("courses");
}
