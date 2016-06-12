(ns ajaxthree.core
  (:require [ajaxthree.server :as server])
  (:gen-class))


(defn start! []
  (server/start!))

(defn -main []
  (start!))
