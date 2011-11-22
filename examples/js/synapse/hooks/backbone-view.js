
define(['synapse/core', 'synapse/hooks/jquery', 'backbone'], function(core, hook) {
  return {
    typeName: 'Backbone View',
    checkObjectType: function(object) {
      return object instanceof Backbone.View;
    },
    getHandler: function(object, key) {
      if (core.getType(object[key]) === 'function') return object[key]();
      return hook.getHandler(hook.coerceObject(object.el), key);
    },
    setHandler: function(object, key, value) {
      if (core.getType(object[key]) === 'function') return object[key](value);
      return hook.setHandler(hook.coerceObject(object.el), key, value);
    },
    onEventHandler: function(object, event, handler) {
      return hook.onEventHandler(hook.coerceObject(object.el), event, handler);
    },
    offEventHandler: function(object, event, handler) {
      return hook.offEventHandler(hook.coerceObject(object.el), event, handler);
    },
    triggerEventHandler: function(object, event) {
      return hook.triggerEventHandler(hook.coerceObject(object.el), event);
    },
    detectEvent: function(object) {
      return hook.detectEvent(hook.coerceObject(object.el));
    },
    detectInterface: function(object) {
      return hook.detectInterface(hook.coerceObject(object.el));
    },
    detectOtherInterface: function(object) {
      return hook.detectOtherInterface(hook.coerceObject(object.el));
    }
  };
});