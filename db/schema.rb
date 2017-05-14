# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170513215407) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "api_keys", force: :cascade do |t|
    t.string   "email"
    t.string   "key"
    t.integer  "state"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_api_keys_on_email", unique: true, using: :btree
    t.index ["key"], name: "index_api_keys_on_key", unique: true, using: :btree
  end

  create_table "auth_sessions", force: :cascade do |t|
    t.string   "identity",      null: false
    t.integer  "identity_type", null: false
    t.string   "token",         null: false
    t.string   "receipt",       null: false
    t.integer  "state",         null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.integer  "api_key_id",    null: false
    t.index ["api_key_id"], name: "index_auth_sessions_on_api_key_id", using: :btree
    t.index ["receipt"], name: "index_auth_sessions_on_receipt", unique: true, using: :btree
    t.index ["token"], name: "index_auth_sessions_on_token", unique: true, using: :btree
  end

  create_table "auth_users", force: :cascade do |t|
    t.string   "slug"
    t.string   "email"
    t.string   "auth_token"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["auth_token"], name: "index_auth_users_on_auth_token", unique: true, using: :btree
    t.index ["email"], name: "index_auth_users_on_email", unique: true, using: :btree
    t.index ["slug"], name: "index_auth_users_on_slug", unique: true, using: :btree
  end

  add_foreign_key "auth_sessions", "api_keys"
end
