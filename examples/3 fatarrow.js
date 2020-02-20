
/**
 * In its simplest form, the fat arrow function is an anonymous function, very similar to a normal function
 */
const foo = (p1, p2) => { //aka function() {}
  console.log(this)
}

//foo() // no context, this is an empty object


/** 
 * The fat arrow function does NOT create a context of it's own. It automatically binds the context 
 * it runs in
 */

var fizz = {
  buzz: {
    quux: function () {
      console.log(this, '\n') // the execution context of quux is buzz. 
    },
    woz: _ => {
      console.log(this, '\n') // the execution context of woz is is empty. 
    }
  }
}

function noContext() {
  fizz.buzz.quux(); // this refers to quux
  fizz.buzz.woz()   // this runs just like foo, bound to nothing and 'this' is an empty object
}

//noContext()


/**
 * This means the fat arrow is really handy in callbacks!
 * 
 * Examples from UI5 code
 */

function oldCallback() {

  this.getModel().read(`${path}/Attachments/$count`, {
    success: function (numberOfAttachments) {
      const color = numberOfAttachments > 0 ? IconColor.Positive : IconColor.Default;
      this.byId('attachTab').setCount(Number(numberOfAttachments)).setIconColor(color);
    }.bind(this) // <-- there's the binding to the controller
  });
}

function badCallback() {
  var that = this; // don't do this :(

  this.getModel().read(`${path}/Attachments/$count`, {
    success: function (numberOfAttachments) {
      const color = numberOfAttachments > 0 ? IconColor.Positive : IconColor.Default;
      that.byId('attachTab').setCount(Number(numberOfAttachments)).setIconColor(color);
    }
  });
}

function newCallback() {
  
  this.getModel().read(`${path}/Attachments/$count`, {
    success: numberOfAttachments => {
      const color = numberOfAttachments > 0 ? IconColor.Positive : IconColor.Default;
      // 'this' refers to your controller as you were expecting, since the callback now
      // ignores the scope of the 'read' method!
      this.byId('attachTab').setCount(Number(numberOfAttachments)).setIconColor(color);
    } // no binding necessary!
  });
}

/**
 * Fat arrow does not need to be declared with brackets, if it's a single operation!
 * 
 * Another real world example
 */

function newCallback() {
  this.byId('attachTab').setBusy(true)

  this.getModel().read(`${path}/Attachments/$count`, {
    success: _ => this.byId('attachTab').setBusy(false),
    error: _ => this.byId('attachTab').setBusy(false)
  });
}