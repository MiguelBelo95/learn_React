import Input from './Input.jsx'
import { useState, useRef } from 'react';
import Modal from './Modal.jsx';

export default function NewProject({ cancel, save }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  const modal = useRef();

  const project = {
    title: '',
    description: '',
    date: ''
  };

  function update() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;

    if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDate.trim() === '') {
      modal.current.open();
      console.log('Im On MODAL')
      return;
    }

    project['title'] = enteredTitle;
    project['description'] = enteredDescription;
    project['date'] = enteredDate;
    save(project);
  }


  return (<>
    <Modal ref={modal} buttonCaption="Close" >
      <h2 className='text-xl font-bold text-stone-700 my-4'> Invalid Input</h2>
      <p className='text-stone-600 mb-4'>Oops... Looks like you forgot to enter a value.</p>
      <p className='text-stone-600 mb-4'>Please make sure you've entered valid values in every field.</p>
    </Modal>
    <div className='w-[35rem] mt-16'>
      <menu className='flex items-center justify-end gap-4 my-4'>
        <li><button className='text-stone-800 hover:text-stone-950' onClick={() => cancel()}>Cancel</button></li>
        <li><button className='px-6 py-2 rounded-md text-stone-50 bg-stone-800 hover:bg-stone-950' onClick={() => update(project)}>Save</button></li>
      </menu>
      <div>
        <Input ref={title} label='Title' />
        <Input ref={description} label='Description' isTextArea />
        <Input type='date' ref={date} label='Due Date' />
      </div>
    </div>
  </>
  );
}
