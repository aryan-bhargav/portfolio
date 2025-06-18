const ConfirmDeletePopup = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <div className="w-full max-w-sm bg-white/10 border border-white/20 rounded-xl p-6 shadow-xl backdrop-blur-xl">
        <p className="text-base text-white mb-6 text-center">
          Are you sure you want to delete this blog?
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 border border-white/20 transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-red-500/80 text-white hover:bg-red-500/90 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeletePopup;
