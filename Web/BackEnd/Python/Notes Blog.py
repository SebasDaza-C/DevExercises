action = ''
notes = 0
note_dict = {}

while action != 'salir':
    action = input('¿Qué desea realizar? (Consultar, Crear, Eliminar, Editar, Salir): ')
    if action == 'consultar':
        if notes == 0: 
            print('No tienes notas')
        else:
            print('Tienes', notes, 'notas')
            for key, value in note_dict.items():
                print(f'{key}. {value}')
    elif action == 'crear':
        notes += 1
        note_created = input('Escriba su nota: ')
        print('Nota creada')
        note_dict[notes] = note_created
    elif action == 'eliminar':
        if notes == 0:
            print('No tienes notas a eliminar')
        else:
            sub_action = input('¿Desea eliminar una nota específica o todas? (Específica/Todas): ')
            if sub_action == 'todas':
                note_dict.clear()
                notes = 0
                print('Todas las notas han sido eliminadas')
            elif sub_action == 'específica':
                note_eliminated = input('Escriba los números de las notas a eliminar separados por comas: ')
                note_eliminated = [int(x) for x in note_eliminated.split(',')]
            for note in note_eliminated:
                if note in note_dict:
                    print(f'Nota eliminada: \'{note_dict[note]}\'')
                del note_dict[note]
                notes -= 1
            else:
                print(f'Número de nota Inválido: {note}')
            note_dict = {i + 1: note for i, note in enumerate(note_dict.values())}
    elif action == 'editar':
        if notes == 0:
            print('No tienes notas a Editar')
        else:
            note_edited = int(input('Escriba el número de la nota a editar: '))
            if note_edited in note_dict:
                note_dict[note_edited] = input('Escriba la nueva nota: ')
                print('Nota editada')
            else:
                print('Número de nota Inválido')
    elif action == 'salir':
        print('Hasta luego')