import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header';
import InputField from '../components/InputField';

function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    company: '',
    agency: 'yes'
  });

  const updateField = (key) => (event) => {
    setForm((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/profile');
  };

  return (
    <section className="page signup-page">
      <Header title="Create your PopX account" />
      <form className="auth-form signup-form" onSubmit={handleSubmit}>
        <InputField
          label="Full Name"
          required
          value={form.fullName}
          onChange={updateField('fullName')}
          placeholder="Enter your full name"
        />
        <InputField
          label="Phone number"
          required
          value={form.phoneNumber}
          onChange={updateField('phoneNumber')}
          placeholder="Enter your phone number"
        />
        <InputField
          label="Email address"
          required
          value={form.email}
          onChange={updateField('email')}
          type="email"
          placeholder="Enter your email address"
        />
        <InputField
          label="Password"
          required
          value={form.password}
          onChange={updateField('password')}
          type="password"
          placeholder="Create a password"
        />
        <InputField
          label="Company name"
          value={form.company}
          onChange={updateField('company')}
          placeholder="Enter your company name"
        />

        <fieldset className="radio-group">
          <legend>
            Are you an Agency?<span>*</span>
          </legend>
          <label>
            <input
              type="radio"
              name="agency"
              value="yes"
              checked={form.agency === 'yes'}
              onChange={updateField('agency')}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="agency"
              value="no"
              checked={form.agency === 'no'}
              onChange={updateField('agency')}
            />
            No
          </label>
        </fieldset>

        <Button type="submit" className="create-btn">
          Create Account
        </Button>
      </form>
    </section>
  );
}

export default SignupPage;
