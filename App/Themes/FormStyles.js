import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

import { Platform } from 'react-native'


var FONT_WEIGHT = '500'

const FormStyles =  Object.freeze({
  fieldset: {},
  // the style applied to the container of all inputs
  formGroup: {
    normal: {
      marginBottom: 10,
      flexDirection: 'row',
      alignItems: 'center'
    },
    error: {
      marginBottom: 10,
      flexDirection: 'row',
      alignItems: 'center'
    }
  },
  controlLabel: {
    normal: {
      flex: 1,
      color: Colors.label,
      fontSize: Fonts.size.medium,
      marginBottom: 7,
      fontWeight: FONT_WEIGHT
    },
    // the style applied when a validation error occours
    error: {
      flex: 1,
      color: Colors.error,
      fontSize: Fonts.size.medium,
      marginBottom: 7,
      fontWeight: FONT_WEIGHT
    }
  },
  helpBlock: {
    normal: {
      color: Colors.help,
      fontSize: Fonts.size.medium,
      marginBottom: 2
    },
    // the style applied when a validation error occours
    error: {
      color: Colors.help,
      fontSize: Fonts.size.medium,
      marginBottom: 2
    }
  },
  errorBlock: {
    fontSize: Fonts.size.medium,
    marginBottom: 2,
    color: Colors.error
  },
  textboxView: {
    normal: {
      flex: 3
    },
    error: {
      flex: 3
    },
    notEditable: {
      flex: 3
    }
  },
  textbox: {
    normal: {
      color: Colors.input,
      fontSize: Fonts.size.medium,
      height: 36,
      paddingVertical: Platform.OS === 'ios' ? 7 : 0,
      paddingHorizontal: 7,
      borderRadius: 4,
      borderColor: Colors.border,
      borderWidth: 1,
      marginBottom: 5
    },
    // the style applied when a validation error occours
    error: {
      color: Colors.input,
      fontSize: Fonts.size.medium,
      height: 36,
      paddingVertical: Platform.OS === 'ios' ? 7 : 0,
      paddingHorizontal: 7,
      borderRadius: 4,
      borderColor: Colors.error,
      borderWidth: 1,
      marginBottom: 5
    },
    // the style applied when the textbox is not editable
    notEditable: {
      fontSize: Fonts.size.medium,
      height: 36,
      paddingVertical: Platform.OS === 'ios' ? 7 : 0,
      paddingHorizontal: 7,
      borderRadius: 4,
      borderColor: Colors.border,
      borderWidth: 1,
      marginBottom: 5,
      color: Colors.disabled,
      backgroundColor: Colors.disabledBackGround
    }
  },
  checkbox: {
    normal: {
      marginBottom: 4
    },
    // the style applied when a validation error occours
    error: {
      marginBottom: 4
    }
  },
  pickerContainer: {
    normal: {
      marginBottom: 4,
      borderRadius: 4,
      borderColor: Colors.border,
      borderWidth: 1
    },
    error: {
      marginBottom: 4,
      borderRadius: 4,
      borderColor: Colors.error,
      borderWidth: 1
    },
    open: {
      // Alter styles when select container is open
    }
  },
  select: {
    normal: Platform.select({
      android: {
        paddingLeft: 7,
        color: Colors.input
      },
      ios: {}
    }),
    // the style applied when a validation error occours
    error: Platform.select({
      android: {
        paddingLeft: 7,
        color: Colors.error
      },
      ios: {}
    })
  },
  pickerTouchable: {
    normal: {
      height: 44,
      flexDirection: 'row',
      alignItems: 'center',
      width: 300
    },
    error: {
      height: 44,
      flexDirection: 'row',
      alignItems: 'center'
    },
    active: {
      borderBottomWidth: 1,
      borderColor: Colors.border
    }
  },
  pickerValue: {
    normal: {
      fontSize: Fonts.size.medium,
      paddingLeft: 7,
      flex: 3
    },
    error: {
      fontSize: Fonts.size.medium,
      paddingLeft: 7,
      flex: 3
    }
  },
  datepicker: {
    normal: {
      marginBottom: 4
    },
    // the style applied when a validation error occours
    error: {
      marginBottom: 4
    }
  },
  dateTouchable: {
    normal: {},
    error: {}
  },
  dateValue: {
    normal: {
      color: Colors.input,
      fontSize: Fonts.size.medium,
      padding: 7,
      marginBottom: 5
    },
    error: {
      color: Colors.error,
      fontSize: Fonts.size.medium,
      padding: 7,
      marginBottom: 5
    }
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
})



export default FormStyles
