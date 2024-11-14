

const { addNoteHandler} = require('./handler');
const { getAllNotesHandler, getNoteByIdHandler} = require('./handler');
const { editNoteByIdHandler, archiveNoteHandler, unarchiveNoteHandler} = require('./handler');
const { deleteNoteByIdHandler} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',                   //sesuai https://notes-api.dicoding.dev/v2                
    handler: addNoteHandler,
  },
  {
    method: 'GET',                      //Get Single Note
    path: '/notes',           //sesuai https://notes-api.dicoding.dev/v2  
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',                   //sesuai https://notes-api.dicoding.dev/v2      
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',                    
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',     //sesuai https://notes-api.dicoding.dev/v2
    handler: deleteNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}/archive',                    
    handler: archiveNoteHandler,
  },

  {
    method: 'PUT',
    path: '/notes/{id}/unarchive',                    
    handler: unarchiveNoteHandler,
  },



];

module.exports = routes;

