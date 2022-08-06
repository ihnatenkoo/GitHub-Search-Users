import { Slide, toast } from 'react-toastify';

type ActionType = 'add' | 'remove';

export const mainToastsOpts = {
  autoClose: 1500,
  pauseOnFocusLoss: false,
  hideProgressBar: true,
  transition: Slide,
  limit: 5,
};

export const customToasts = (action: ActionType, name: string) => {
  return toast.info(
    <>
      {action === 'add' ? (
        <div>
          <span className="text-red-500">{name} </span>
          add to favorite
        </div>
      ) : (
        <div>
          <span className="text-blue-700">{name} </span>
          remove from favorite
        </div>
      )}
    </>,

    {
      icon: () =>
        action === 'add' ? (
          <span className="material-icons-outlined text-red-500">favorite</span>
        ) : (
          <span className="material-icons-outlined text-blue-700">delete</span>
        ),
    }
  );
};
