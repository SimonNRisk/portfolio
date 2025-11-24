export const Trivia = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-50">
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 p-6 bg-white rounded-xl shadow-xl z-50">
        <h1>Trivia</h1>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
