import { dew as _try_runDewDew } from "../lib/try_run.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  const tryRun = _try_runDewDew();

  describe("tryRun", function () {
    var innerErr = new Error("Inner function failed");
    describe("without configured retry", function () {
      it("calls the provided function once", function (done) {
        var innerCalls = 0;
        tryRun(0, {}, function (callback) {
          innerCalls += 1;
          callback(innerErr);
        }, function (err) {
          expect(innerCalls).toEqual(1);
          expect(err).toEqual(innerErr);
          done();
        });
      });
    });
    describe("with configured retry", function () {
      var retryOptions = {
        retries: 2,
        timeout: 10
      };
      it("calls the provided function once when no error is returned", function (done) {
        var innerCalls = 0;
        tryRun(0, retryOptions, function (callback) {
          innerCalls += 1;
          callback(null);
        }, function (err) {
          expect(err).toBeFalsy();
          expect(innerCalls).toEqual(1);
          done();
        });
      });
      it("retries up-to connectRetries when the function returns an error", function (done) {
        var innerCalls = 0;
        tryRun(0, retryOptions, function (callback) {
          innerCalls += 1;
          callback(innerErr);
        }, function (err) {
          expect(err).toEqual(innerErr);
          expect(innerCalls).toEqual(3);
          done();
        });
      });
      it("waits timeout between retries", function (done) {
        var start = Date.now();
        tryRun(0, retryOptions, function (callback) {
          callback(innerErr);
        }, function () {
          var end = Date.now();
          expect(end - start).toBeGreaterThan(19); // Double timeout-1

          done();
        });
      });
    });
  });
  return exports;
}