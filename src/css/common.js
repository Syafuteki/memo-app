const common = () => ({
    name: {
        textAlign: 'center',
        fontSize: 30,
        letterSpacing: 3,
        marginTop: 5,
        marginBottom: 15,
      },
      container: {
        height: '80%',
        flexDirection: 'row',
        marginBottom: 15,
      },
      icon: {
        flex: 1,
        textAlign: 'center',
        paddingTop: '50%',
        //backgroundColor: 'green',
      },
      content: {
        flex: 8,
        padding: 10,
        borderWidth: 2,
        borderRadius: 5,
        marginHorizontal: 10,
        //backgroundColor: 'red',
      },
      btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
      btn: {
        fontSize: 18,
        marginHorizontal: 40,
        paddingVertical: 5,
        paddingHorizontal: 30,
        borderWidth: 1,
        borderRadius: 5,
        //backgroundColor: 'yellow',
      },
});

export default common;