const QuienesSomos = () => {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-lg-6 mb-4">
          <h1 className="mb-4">Quiénes Somos</h1>
          <p className="lead">
            En TechMobile creemos que la innovación comienza con una excelente experiencia para el usuario.
          </p>
          <p>
            Desde el dos mil y pico escupiendo adrenalina, nos dedicamos a ofrecer celulares de última generación, combinando tecnología, diseño y accesibilidad para todos los públicos.
          </p>
          <p>
            Contamos con un equipo apasionado por lo digital, comprometido en asesorarte con honestidad y cercanía para que tomes la mejor decisión al momento de elegir tu próximo dispositivo.
          </p>
        </div>
        <div className="col-lg-6">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
            alt="Nuestro equipo" 
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
      
      <div className="row mt-5">
        <div className="col-12">
          <h2 className="mb-4">Nuestra Misión</h2>
          <div className="card bg-light border-0">
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>
                  "Nuestra misión es democratizar el acceso a la tecnología móvil de alta gama, con un enfoque humano, soluciones personalizadas y un servicio postventa que marca la diferencia."
                </p>
                <footer className="blockquote-footer mt-2">Fundador de TechMobile</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
