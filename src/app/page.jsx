export default function Home() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#ffcccc',
      margin: 0,
      padding: 0,
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        backgroundColor: 'white',
        maxWidth: '800px',
        margin: '20px auto',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#333', marginBottom: '10px' }}>Final Exam 343</h1>
        <h2 style={{ color: '#333', marginBottom: '10px' }}>Qureshi, Anique</h2>
        <h3 style={{ color: '#333' }}>Spring 2025</h3>   
      </div>
    </div>
  )
}