(ns ajaxthree.dev
  (:require [ajaxthree.core :as core]))

(enable-console-print!)

(defn on-jsload []
  (core/main))
