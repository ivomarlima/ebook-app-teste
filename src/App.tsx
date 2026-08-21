import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="page">
      <section className="card" aria-labelledby="page-title">
        <span className="eyebrow">Leitura digital</span>
        <h1 id="page-title">Teste E-book App</h1>
        <p>
          Um aplicativo mínimo em React, TypeScript e Vite para validar a base de
          uma experiência de leitura digital.
        </p>

        <div className="counter" aria-live="polite">
          <span>Contagem atual</span>
          <strong>{count}</strong>
          <button type="button" onClick={() => setCount((value) => value + 1)}>
            Incrementar contador
          </button>
        </div>
      </section>
    </main>
  )
}

export default App
