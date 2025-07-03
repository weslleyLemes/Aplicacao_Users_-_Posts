import React, { useEffect, useState } from "react";

//aplicacao responsavel pela simulacao de prograsso da barra de carregamento
const LoadingProgress = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("Iniciando carregamento...");

  useEffect(() => {
    const steps = [
      { percent: 10, delay: 300, message: "Conectando à API..." },
      { percent: 30, delay: 500, message: "Consultando usuários..." },
      { percent: 60, delay: 700, message: "Formatando dados..." },
      { percent: 90, delay: 400, message: "Quase pronto..." },
      { percent: 100, delay: 300, message: "Concluído!" },
    ];

    let current = 0;

    const nextStep = () => {
      if (current < steps.length) {
        const step = steps[current];
        setTimeout(() => {
          setProgress(step.percent);
          setMessage(step.message);
          current++;
          nextStep();
        }, step.delay);
      } else {
        setTimeout(onFinish, 400);
      }
    };

    nextStep();
  }, [onFinish]);

  return (
    <div className="w-full max-w-xl mx-auto mt-8">
      <div className="text-sm text-gray-700 mb-2">{message}</div>
      <div className="w-full bg-gray-300 h-4 rounded">
        <div
          className="h-4 bg-blue-500 rounded transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="text-right text-xs text-gray-500 mt-1">{progress}%</div>
    </div>
  );
};

export default LoadingProgress;
