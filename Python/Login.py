usernames = {'Sebastian': 1}
passwords = {'Sebastian': '102982'}

def create_account():
    print('Let\'s create your account')
    new_username = input('Enter your username: ')
    new_password = input('Enter your password: ')
    if new_username in usernames:
        print('Username already exists. Please choose a different username.')
    else:
        usernames[new_username] = len(usernames) + 1
        passwords[new_username] = new_password
        print('Your account has been created')
        print('Your username is "' + new_username + '" and your password is "' + new_password + '"')
    username_vof = input('Enter your username: ')
    password_vof = input('Enter your password: ')
    if username_vof in usernames and passwords[username_vof] == password_vof:
        if username_vof == 'Sebastian':
            print('Welcome back administrator ' + username_vof)
            admin_list = input('Do you want to see the list of users? (yes/no): ')
            if admin_list.lower() == 'yes':
                print('List of users:')
                for user in usernames:
                    print(user)
            elif admin_list.lower() == 'no':
                print('Okay, have a nice day!')
            else:
                print('Invalid option')
        else:
            print('Welcome back ' + username_vof)
    else:
        print('Incorrect username or password')

def login():
    print('Welcome to Login')
    new_or_existing = input('Do you have an existing account? (yes/no): ')
    if new_or_existing.lower() == 'exit':
        print('Exiting the program. Goodbye!')
        return
    if new_or_existing.lower() == 'no':
        create_account()
    elif new_or_existing.lower() == 'yes':
        username_vof = input('Enter your username: ')
        password_vof = input('Enter your password: ')
        if username_vof in usernames and passwords[username_vof] == password_vof:
            if username_vof == 'Sebastian':
                print('Welcome back administrator ' + username_vof)
                admin_list = input('Do you want to see the list of users? (yes/no): ')
                if admin_list.lower() == 'yes':
                    print('List of users:')
                    for user in usernames:
                        print(user)
                elif admin_list.lower() == 'no':
                    print('Okay, have a nice day!')
                else:
                    print('Invalid option')
            else:
                print('Welcome back ' + username_vof)
        else:
            print('Incorrect username or password')
    else:
        print('Invalid option')

def main():
    login()

if __name__ == "__main__":
    main()