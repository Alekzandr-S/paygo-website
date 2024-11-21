
const submitApplication = async (values: any, roleId: string) => {
  const formData = new FormData();
  
  formData.append('cv', values.cv[0]);
  formData.append('nrc', values.nrc[0]);
  formData.append('cover_letter', values.cover_letter[0]);
  formData.append('first_name', values.first_name);
  formData.append('surname', values.surname);
  formData.append('email', values.email);
  formData.append('phone', values.phone);
  formData.append('role_id', roleId.toString());

  try {
    const response = await fetch('/api/apply-job', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('Submission successful');
      return true;
    } else {
      console.error('Submission failed');
      return false;
    }
  } catch (error) {
    console.error('Submission error', error);
    return false;
  }
};

export default submitApplication;
