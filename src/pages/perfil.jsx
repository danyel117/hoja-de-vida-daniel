import Input from '../components/Input';
import useFormData from '../hooks/useFormData';

const Perfil = () => {
  const { form, formData, updateFormData } = useFormData();

  const submitForm = (e) => {
    e.preventDefault();
    console.log('formData', formData);
  };

  return (
    <div className='flex flex-col p-10 items-center'>
      <h1 className='text-2xl font-bold text-gray-800 my-4'>Ingresa los datos de tu perfil</h1>
      <form
        ref={form}
        onChange={updateFormData}
        onSubmit={submitForm}
        className='flex flex-col items-center'
      >
        <div className='flex flex-col md:grid md:grid-cols-2 md:gap-2 '>
          <Input text='Nombre' name='nombre' placeholder='Ingresa tu nombre' type='text' />
          <Input text='Apellido' name='apellido' placeholder='Ingresa tu apellido' type='text' />
          <Input text='Documento' name='documento' placeholder='Ingresa tu documento' type='text' />
          <Input text='Telefono' name='telefono' placeholder='Ingresa tu teléfono' type='text' />
          <Input text='Fecha de Nacimiento' name='fecha_nacimiento' type='date' />
          <Input text='Foto' name='foto' type='file' />
        </div>
        <button className='button-submit' type='submit'>
          Enviar Formulario
        </button>
      </form>
    </div>
  );
};

export default Perfil;
