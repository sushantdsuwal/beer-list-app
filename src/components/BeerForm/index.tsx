import { v4 as uuidv4 } from 'uuid';
import { Modal, Button, Form } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';

import beerTypes from '../../types/beerTypes';

import './styles.css';

export interface CustombeerTypes {
  name: string;
  tagline: string;
  image_url: string;
  description: string;
  id: string;
}

interface BeerFormProps {
  addCustomBeer: (customBeer: beerTypes) => void;
  showModal: boolean;
  onCloseModal: () => void;
  onOpenModal: () => void;
}

const BeerForm = ({ addCustomBeer, showModal, onCloseModal, onOpenModal }: BeerFormProps) => {
  const { handleSubmit, control, reset } = useForm();

  const onSubmit = (data: any) => {
    const uniqueId = uuidv4();

    const customBeer = {
      id: uniqueId,
      name: data.beerName,
      tagline: data.genre,
      description: data.beerDescription,
      image_url: '/houzzbeer.png',
    };
    addCustomBeer(customBeer as unknown as beerTypes);
    reset();
    onCloseModal();
  };

  return (
    <div className='custom-beer-form'>
      <div className='custom-beer-form d-flex justify-content-end mb-2'>
        <Button onClick={onOpenModal}>Add a Custom Beer</Button>
      </div>
      <Modal show={showModal} onHide={onCloseModal} animation={false} className='custom-modal' centered>
        <Modal.Header closeButton>
          <Modal.Title>Add a New Beer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src='/houzzbeer.png' alt='Houzz Beer' className='image mb-3' />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId='beerName' className='mb-3'>
              <Controller
                name='beerName'
                control={control}
                defaultValue=''
                rules={{ required: 'Beer name is required' }}
                render={({ field, fieldState }) => (
                  <>
                    <Form.Control {...field} placeholder='Beer name*' isInvalid={fieldState.invalid} />
                    <Form.Control.Feedback type='invalid'>{fieldState.error?.message}</Form.Control.Feedback>
                  </>
                )}
              />
            </Form.Group>
            <Form.Group controlId='genre' className='mb-3'>
              <Controller
                name='genre'
                control={control}
                defaultValue=''
                rules={{ required: 'Genre is required' }}
                render={({ field, fieldState }) => (
                  <>
                    <Form.Control {...field} placeholder='Genre*' isInvalid={fieldState.invalid} />
                    <Form.Control.Feedback type='invalid'>{fieldState.error?.message}</Form.Control.Feedback>
                  </>
                )}
              />
            </Form.Group>
            <Form.Group controlId='beerDescription'>
              <Controller
                name='beerDescription'
                control={control}
                defaultValue=''
                rules={{ required: 'Description is required' }}
                render={({ field, fieldState }) => (
                  <>
                    <Form.Control
                      {...field}
                      as='textarea'
                      rows={3}
                      placeholder='Description*'
                      isInvalid={fieldState.invalid}
                    />
                    <Form.Control.Feedback type='invalid'>{fieldState.error?.message}</Form.Control.Feedback>
                  </>
                )}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary-outline' onClick={onCloseModal}>
            Cancel
          </Button>
          <Button variant='primary' onClick={handleSubmit(onSubmit)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BeerForm;
