import Card from '../components/Card';

const profileData = {
  image:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  name: 'Your Name',
  email: 'yourname@example.com',
  about:
    'Add a short bio, your role, or anything you want shown on your profile.'
};

function ProfilePage() {
  return (
    <section className="page profile-page">
      <h2 className="profile-title">Account Settings</h2>
      <Card
        image={profileData.image}
        title={profileData.name}
        subtitle={profileData.email}
        description={profileData.about}
      />
      <div className="profile-dashed" />
    </section>
  );
}

export default ProfilePage;
