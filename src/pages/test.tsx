// import axios from 'axios';
// import { useSelector } from 'react-redux';
import { Button } from '@/component/_root';
import React from 'react';

// import { wrapper } from '@/store/store';
// import {
//   getUserFailed,
//   getUserSuccessfully,
//   requestForGetUser,
// } from '@/store/User/action';

const test = () => {
  // this part is for test the redux store. To check the redux store part please remove the commit part from line 16 to line 24

  // type user = {
  //   id: number;
  //   name: string;
  //   email: string;
  // };
  // const user: any = useSelector((state) => state);
  // const usersData: any[] = user.user.user;
  // console.log(user)
  // const dispatch = useDispatch();
  // useEffect (() => {
  //   (async () => {
  //      dispatch (await getAllUserDetails())
  //   }) ()
  // }, [])

  // const route = useRouter();
  // const [data, setData] = useState<string>('');
  // this section is for button root component  part
  // const rootButtonHandler = (e: any, arg: any): void => {
  //   console.log(arg);
  // };

  // this part is for check the dark mode
  // follow the step from here: https://nextjsdev.com/add-dark-mode-in-nextjs-app-using-tailwind-css-dark-mode/
  // const { systemTheme, theme, setTheme } = useTheme();
  // const currentTheme: any = theme === 'system' ? systemTheme : theme;
  // const [currentMode, SetCurrentMode] = useState<string>('');
  // const renderThemeChanger = (): void => {
  // const currentTheme = theme === 'system' ? systemTheme : theme; // this will set the current theme. If First time then it will be the system theme and system theme will always be "light"
  // console.log(currentTheme)
  // if (currentTheme === 'dark') {
  //   setTheme('light');
  //   SetCurrentMode('Light');
  // } else {
  //   setTheme('dark');
  //   SetCurrentMode('Dark');
  // }

  // useEffect(() => {
  //   SetCurrentMode(currentTheme);
  // }, []);
  return (
    // this part is for test the redux store. To check the redux store part please remove the commit part from line 31 to line 46

    // <div>
    //   {usersData.length && (
    //     <>
    //       {usersData.map((user) => {
    //         return (
    //           <div key={user.id}>
    //             <p>User id: {user.id}</p>
    //             <p>Name: {user.name}</p>
    //             <p>Email: {user.email}</p>
    //             <br />
    //           </div>
    //         );
    //       })}
    //     </>
    //   )}
    // </div>
    // redux setup end

    // this section is test for dark mode. check the line 74 to line 77
    // <div className = {`bg-blue-300 dark:bg-slate-700 h-screen flex items-center justify-center`}>
    //   <div className = {`flex align-middle justify-center`}>
    //     <button onClick = {() => renderThemeChanger ()}
    //       className = {`drop-shadow-xl p-5 bg-brandColor-green text-gray-900 font-bold dark:bg-slate-50 dark:text-red-600 capitalize `}>
    //         {currentMode}
    //       </button>
    //   </div>
    // </div>
    // dark mode setup end

    // dynamic button component part test start
    <div className = {`h-screen`}>
      <div className = "mt-5 flex justify-center align-middle ">
      {/* <input type="text" onChange={(e) => setData(e.target.value)} /> */}
      <Button
        label="Follow"
        variant = "v4"
        nameOfClass='bg-brandColor-black-dark ' 
      />
    </div>
    </div>
    // dynamic button component test end
  );
};

// export const getStaticProps = wrapper.getStaticProps(
//   (store) => async (): Promise<any> => {
//     store.dispatch(requestForGetUser()); // request for getting data
//     const { data, status } = await axios.get(
//       `https://jsonplaceholder.typicode.com/users`
//     );
//     if (status === 200) {
//       const finalData: any | any = [];
//       data.forEach((user: any) => {
//         const struct: any = {
//           id: user.id,
//           email: user.email,
//           name: user.name,
//         };
//         finalData.push(struct);
//       });
//       store.dispatch(getUserSuccessfully(finalData));
//     } else {
//       store.dispatch(getUserFailed());
//     }
//   }
// );
export default test;
