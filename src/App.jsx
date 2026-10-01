// ==========================================
// PÁGINA WEB: MEDIDAS DE EMERGENCIA (MED)
// URL: neurlamed.vercel.app
// ==========================================
if (currentView === 'med') {
  return (
    <div className="min-h-screen bg-slate-900 py-6 px-4 font-sans text-slate-100 flex justify-center">
      <div className="bg-slate-800 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden max-w-2xl w-full flex flex-col">
        
        {/* Cabecera de la página */}
        <div className="bg-purple-700 text-white p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-purple-600">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2.5 rounded-2xl">
              <Flame className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-black tracking-wide uppercase">Medidas de Emergencia y Evacuación</h1>
              <p className="text-xs text-purple-200">Grupo Neural • Protocolo para Empresas Proveedoras y Externas</p>
            </div>
          </div>
          <button 
            onClick={() => setCurrentView('form')}
            className="bg-white hover:bg-purple-50 text-purple-900 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition shadow-md"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al formulario
          </button>
        </div>

        {/* Contenido Ampliado y Estructurado */}
        <div className="p-6 sm:p-8 space-y-6 text-xs sm:text-sm leading-relaxed text-slate-300 overflow-y-auto max-h-[75vh]">
          
          {/* Introducción */}
          <div className="bg-purple-950/40 border border-purple-800/60 p-4 rounded-2xl text-purple-200">
            <p className="font-semibold">
              Las empresas proveedoras, contratistas y cualquier personal externo que accedan a las instalaciones deberán conocer y cumplir estrictamente las medidas de emergencia establecidas en el centro de trabajo.
            </p>
          </div>

          {/* 1. Actuación General */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-purple-500 rounded-full"></span> 1. Actuación General ante Emergencias
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-300 text-xs bg-slate-900/60 p-4 rounded-xl border border-slate-700">
              <li><strong className="text-white">Mantener la calma</strong> en todo momento y no generar alarma innecesaria.</li>
              <li>Comunicar inmediatamente cualquier incidente, accidente, incendio o situación de riesgo al personal responsable del centro.</li>
              <li>Seguir en todo momento las instrucciones de la Persona Responsable de Emergencia o de los equipos de intervención.</li>
              <li>No asumir riesgos innecesarios ni actuar sin la formación o autorización adecuada.</li>
              <li>Facilitar en todo lo posible la intervención de los servicios de emergencia externos.</li>
            </ul>
          </div>

          {/* 2. Prevención de Incendios y Actuación */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-amber-500 rounded-full"></span> 2. Prevención y Actuación en Caso de Incendio
            </h2>
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700">
                <h3 className="font-bold text-white text-xs mb-1">Medidas Preventivas</h3>
                <p className="text-slate-400 text-xs">Mantenga el orden y la limpieza. No sobrecargue enchufes ni manipule instalaciones. Nunca obstaculice salidas de emergencia, recorridos de evacuación ni extintores. Mantenga materiales combustibles alejados de focos de calor.</p>
              </div>
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700">
                <h3 className="font-bold text-white text-xs mb-1">En caso de Conato de Incendio</h3>
                <p className="text-slate-400 text-xs">Aseviro / avise inmediatamente al personal responsable. Si el fuego es pequeño y dispone de formación, utilice el extintor más próximo sin poner en riesgo su integridad. Si el peligro es elevado, evacúe la zona cerrando puertas y ventanas a su paso.</p>
              </div>
            </div>
          </div>

          {/* 3. Proceso de Evacuación */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></span> 3. Normas de Evacuación
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-300 text-xs bg-slate-900/60 p-4 rounded-xl border border-slate-700">
              <li>Abandonar el edificio de forma ordenada, rápida y sin correr.</li>
              <li>Utilizar exclusivamente las vías de evacuación debidamente señalizadas.</li>
              <li><strong className="text-white">Queda terminantemente prohibido utilizar los ascensores.</strong></li>
              <li>No detenerse bajo ningún concepto a recoger objetos personales.</li>
              <li>Dirigirse directamente al Punto de Reunión Exterior y permanecer allí hasta recibir instrucciones. No reingresar al edificio hasta que se avise oficialmente que es seguro.</li>
            </ul>
          </div>

          {/* 4. Primeros Auxilios, Derrames y Amenazas */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span> 4. Incidentes, Primeros Auxilios y Sustancias
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700">
                <h3 className="font-bold text-white text-xs mb-1">Primeros Auxilios</h3>
                <p className="text-slate-400 text-xs">Aplique la regla PAS: Proteger, Avisar y Socorrer. No mueva a heridos graves salvo riesgo inminente y solicite asistencia médica.</p>
              </div>
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700">
                <h3 className="font-bold text-white text-xs mb-1">Paquetes Suspectos</h3>
                <p className="text-slate-400 text-xs">No manipule objetos extraños. Aleje a las personas del área e informe de inmediato al responsable de seguridad.</p>
              </div>
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700">
                <h3 className="font-bold text-white text-xs mb-1">Derrames Químicos</h3>
                <p className="text-slate-400 text-xs">Avise al responsable. No intervenga sin EPIs ni formación específica. Evite fuentes de ignición y contacto directo.</p>
              </div>
            </div>
          </div>

          {/* 5. Teléfonos de Emergencia */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-rose-500 rounded-full"></span> 5. Teléfonos de Emergencia Clave
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="bg-rose-950/50 border border-rose-800/60 p-3 rounded-xl">
                <span className="block text-rose-300 text-[10px] uppercase font-bold">Emergencias / Médico</span>
                <span className="text-lg font-black text-white">112</span>
              </div>
              <div className="bg-slate-900/60 border border-slate-700 p-3 rounded-xl">
                <span className="block text-slate-400 text-[10px] uppercase font-bold">Policía Nacional</span>
                <span className="text-lg font-black text-white">091</span>
              </div>
              <div className="bg-slate-900/60 border border-slate-700 p-3 rounded-xl">
                <span className="block text-slate-400 text-[10px] uppercase font-bold">Policía Local</span>
                <span className="text-lg font-black text-white">092</span>
              </div>
              <div className="bg-slate-900/60 border border-slate-700 p-3 rounded-xl">
                <span className="block text-slate-400 text-[10px] uppercase font-bold">Guardia Civil</span>
                <span className="text-lg font-black text-white">062</span>
              </div>
            </div>
          </div>

          {/* Botón inferior de confirmación y retorno */}
          <div className="pt-4 border-t border-slate-700">
            <button 
              onClick={() => setCurrentView('form')}
              className="w-full py-4 bg-purple-600 hover:bg-purple-500 text-white font-black rounded-2xl text-sm shadow-lg shadow-purple-900/50 transition flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-5 h-5" /> He leído y comprendido - Volver al formulario
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
